import client from './contentfulClient';

export const fetchBlog = async () => {
    const entries = await client.getEntries({ content_type: 'blogPost' });

    const entryMap = Object.fromEntries(
        (entries.includes?.Entry || []).map((e: any) => [e.sys.id, e])
    );
    const assetMap = Object.fromEntries(
        (entries.includes?.Asset || []).map((a: any) => [a.sys.id, a])
    );

    return entries.items.map((item: any) => {
        let mainImage = null;
        if (item.fields.mainImage && assetMap[item.fields.mainImage.sys.id]) {
            const asset = assetMap[item.fields.mainImage.sys.id];
            mainImage = {
                sys: { id: asset.sys.id },
                url: asset.fields.file.url,
                title: asset.fields.title || null,
                description: asset.fields.description || null,
            };
        }

        let author = null;
        if (item.fields.postAuthor && entryMap[item.fields.postAuthor.sys.id]) {
            const authorEntry = entryMap[item.fields.postAuthor.sys.id];
            author = {
                id: authorEntry.sys.id,
                authorName: authorEntry.fields.authorName,
                authorRole: authorEntry.fields.authorRole || null,
            };
        }

        let category = null;
        if (item.fields.category && entryMap[item.fields.category.sys.id]) {
            const catEntry = entryMap[item.fields.category.sys.id];
            category = {
                id: catEntry.sys.id,
                name: catEntry.fields.name,
            };
        }

        let heroImages = null;
        if (item.fields.heroImages && Array.isArray(item.fields.heroImages)) {
            heroImages = item.fields.heroImages
                .map((ref: any) =>
                    assetMap[ref.sys.id]
                        ? {
                            sys: { id: assetMap[ref.sys.id].sys.id },
                            url: assetMap[ref.sys.id].fields.file.url,
                            title: assetMap[ref.sys.id].fields.title || null,
                            description: assetMap[ref.sys.id].fields.description || null,
                        }
                        : null
                )
                .filter(Boolean);
        }

        let steps = null;
        if (item.fields.steps && Array.isArray(item.fields.steps)) {
            steps = item.fields.steps
                .map((ref: any) =>
                    entryMap[ref.sys.id]
                        ? {
                            id: entryMap[ref.sys.id].sys.id,
                            stepNumber: entryMap[ref.sys.id].fields.stepNumber,
                            stepTitle: entryMap[ref.sys.id].fields.stepTitle,
                            stepDescription: entryMap[ref.sys.id].fields.stepDescription,
                        }
                        : null
                )
                .filter(Boolean);
        }

        return {
            id: item.sys.id,
            mainImage,
            author,
            testimonialText: item.fields.testimonialText || null,
            slug: item.fields.slug,
            category,
            readMoreLabel: item.fields.readMoreLabel || null,
            heroTitle: item.fields.heroTitle || null,
            heroDescription: item.fields.heroDescription || null,
            heroImages,
            stepTitle: item.fields.stepTitle || null,
            steps,
            postContent: item.fields.postContent || null,
        };
    });
};

export const fetchCategoryById = async (id: string) => {
    if (!id) return null;
    const entry = await client.getEntry(id);
    if (!entry || !entry.fields || !entry.fields.name) return null;
    return {
        id: entry.sys.id,
        name: entry.fields.name,
    };
};

export const fetchPostsByCategory = async (categoryId: string, limit = 6, skip = 0) => {
    const entries = await client.getEntries({
        content_type: 'blogPost',
        'fields.category.sys.id': categoryId,
        order: ['-sys.createdAt'],
        limit,
        skip,
        include: 2, // include, щоб витягти зв’язані entry
    });

    // Entry мап для швидкого доступу по id
    const entryMap = Object.fromEntries(
        (entries.includes?.Entry || []).map((e: any) => [e.sys.id, e])
    );
    const assetMap = Object.fromEntries(
        (entries.includes?.Asset || []).map((a: any) => [a.sys.id, a])
    );

    return {
        total: entries.total,
        posts: entries.items.map((item: any) => {
            // !!! Використовуй postAuthor:
            let author = null;
            if (item.fields.postAuthor && entryMap[item.fields.postAuthor.sys.id]) {
                const authorEntry = entryMap[item.fields.postAuthor.sys.id];
                author = {
                    id: authorEntry.sys.id,
                    authorName: authorEntry.fields.authorName,
                    authorRole: authorEntry.fields.authorRole || null,
                };
            }
            return {
                sys: { id: item.sys.id },
                title: item.fields.heroTitle || '', // або item.fields.title
                description: item.fields.heroDescription || '', // або item.fields.description
                image: item.fields.mainImage && assetMap[item.fields.mainImage.sys.id]
                    ? { url: assetMap[item.fields.mainImage.sys.id].fields.file.url }
                    : undefined,
                date: item.fields.date || '',
                testimonialText: item.fields.testimonialText || null,
                slug: item.fields.slug,
                author,
            };
        }),
    };
};

export const fetchFullBlogPostList = async (postId?: string) => {
    const query: any = { content_type: 'blogPost', include: 3 };
    if (postId) {
        query['sys.id'] = postId;
    }
    const entries = await client.getEntries(query);

    // Створюємо мапи для assets та entries для розгортання reference-полів
    const entryMap = Object.fromEntries((entries.includes?.Entry || []).map(e => [e.sys.id, e]));
    const assetMap = Object.fromEntries((entries.includes?.Asset || []).map(a => [a.sys.id, a]));

    // Хелпери для розгортання референсів та медіа
    const getAsset = (ref: any) => {
        const asset = ref && assetMap[ref.sys.id];
        if (!asset || !asset.fields || !asset.fields.file || !asset.fields.file.url) return null;
        return {
            id: asset.sys.id,
            url: asset.fields.file.url,
            title: asset.fields.title || null,
            description: asset.fields.description || null,
        };
    };

    const getAssets = (arr: any[]) => Array.isArray(arr) ? arr.map(getAsset).filter(Boolean) : [];

    const getEntry = (ref: any) => ref && entryMap[ref.sys.id]
        ? {
            id: entryMap[ref.sys.id].sys.id,
            ...entryMap[ref.sys.id].fields,
        }
        : null;

    const getEntries = (arr: any[]) => Array.isArray(arr)
        ? arr.map(getEntry).filter(Boolean)
        : [];

    // Мапимо всі поля
    return entries.items.map((item: any) => {
        const f = item.fields;

        // Витягуємо автора через postAuthor (як і в інших функціях)
        let author = null;
        if (f.postAuthor && entryMap[f.postAuthor.sys.id]) {
            const authorEntry = entryMap[f.postAuthor.sys.id];
            author = {
                id: authorEntry.sys.id,
                authorName: authorEntry.fields.authorName,
                authorRole: authorEntry.fields.authorRole || null,
            };
        }

        // Витягуємо category
        let category = null;
        if (f.category && entryMap[f.category.sys.id]) {
            const catEntry = entryMap[f.category.sys.id];
            category = {
                id: catEntry.sys.id,
                name: catEntry.fields.name,
            };
        }

        return {
            id: item.sys.id,
            mainImage: getAsset(f.mainImage),
            author,
            testimonialText: f.testimonialText ?? null,
            slug: f.slug ?? null,
            category,
            readMoreLabel: f.readMoreLabel ?? null,
            title: f.heroTitle ?? null,
            heroDescription: item.fields.heroDescription || null,
            heroImages: getAssets(f.heroImages),
            stepTitle: f.stepTitle ?? null,
            steps: getEntries(f.steps),
            postContent: f.postContent ?? null,           // Rich text
            callToAction: getEntry(f.callToAction),       // Reference
            comments: getEntries(f.comments),             // References, many
        };
    });
};
