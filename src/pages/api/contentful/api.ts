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
        include: 2,
    });

    const entryMap = Object.fromEntries(
        (entries.includes?.Entry || []).map((e: any) => [e.sys.id, e])
    );
    const assetMap = Object.fromEntries(
        (entries.includes?.Asset || []).map((a: any) => [a.sys.id, a])
    );

    return {
        total: entries.total,
        posts: entries.items.map((item: any) => {
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
                title: item.fields.heroTitle || '',
                description: item.fields.heroDescription || '',
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

    const entryMap = Object.fromEntries((entries.includes?.Entry || []).map(e => [e.sys.id, e]));
    const assetMap = Object.fromEntries((entries.includes?.Asset || []).map(a => [a.sys.id, a]));

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

    return entries.items.map((item: any) => {
        const f = item.fields;

        let author = null;
        if (f.postAuthor && entryMap[f.postAuthor.sys.id]) {
            const authorEntry = entryMap[f.postAuthor.sys.id];
            author = {
                id: authorEntry.sys.id,
                authorName: authorEntry.fields.authorName,
                authorRole: authorEntry.fields.authorRole || null,
                authorAvatar: authorEntry.fields.authorAvatar
                    ? getAsset(authorEntry.fields.authorAvatar)
                    : null,
            };
        }

        let category = null;
        if (f.category && entryMap[f.category.sys.id]) {
            const catEntry = entryMap[f.category.sys.id];
            category = {
                id: catEntry.sys.id,
                name: catEntry.fields.name,
            };
        }

        const getButton = (ref: any) => {
            const entry = ref && ref.sys && entryMap[ref.sys.id];
            return entry ? {
                id: entry.sys.id,
                title: entry.fields.title,
                url: entry.fields.url || null,
            } : null;
        };

        const getStep = (ref: any) => {
            const entry = ref && ref.sys && entryMap[ref.sys.id];
            return entry ? {
                id: entry.sys.id,
                stepNumber: entry.fields.stepNumber,
                stepTitle: entry.fields.stepTitle,
                stepDescription: entry.fields.stepDescription,
            } : null;
        };

        let comments = [];
        if (Array.isArray(f.comments)) {
            comments = f.comments
                .map(ref => {
                    const entry = ref && ref.sys && entryMap[ref.sys.id];
                    if (!entry) return null;
                    return {
                        id: entry.sys.id,
                        authorName: entry.fields.authorName,
                        authorAvatar: entry.fields.authorAvatar
                            ? getAsset(entry.fields.authorAvatar)
                            : null,
                        createdAt: entry.fields.createdAt,
                        commentText: entry.fields.commentText,
                    };
                })
                .filter(Boolean);
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
            heroButton1: getButton(f.heroButton1),
            heroButton2: getButton(f.heroButton2),
            heroCarousel: Array.isArray(f.heroCarousel)
                ? f.heroCarousel.map(ref => {
                    const entry = ref && ref.sys && entryMap[ref.sys.id];
                    if (!entry) return null;
                    return {
                        id: entry.sys.id,
                        image: entry.fields.image && assetMap[entry.fields.image.sys?.id]
                            ? {
                                url: assetMap[entry.fields.image.sys.id]?.fields?.file?.url || null,
                                title: assetMap[entry.fields.image.sys.id]?.fields?.title || null,
                                description: assetMap[entry.fields.image.sys.id]?.fields?.description || null,
                            }
                            : null,
                        url: entry.fields.url || null,
                    };
                }).filter(Boolean)
                : [],

            stepTitle: f.stepTitle ?? null,
            steps: Array.isArray(f.steps)
                ? f.steps.map(ref => {
                    const entry = ref && ref.sys && entryMap[ref.sys.id];
                    return entry ? {
                        id: entry.sys.id,
                        stepNumber: entry.fields.stepNumber,
                        stepTitle: entry.fields.stepTitle,
                        stepDescription: entry.fields.stepDescription,
                    } : null;
                }).filter(Boolean)
                : [],
            postContent: f.postContent ?? null,
            callToAction: getEntry(f.callToAction),
            comments,
            sidebarContactTitle: f.sidebarContactTitle ?? null,
            sidebarContactButton: getButton(f.sidebarContactButton),
        };
    });
};
