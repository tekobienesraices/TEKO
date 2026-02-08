import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostPage from './BlogPostPage';
import { getPostById, blogPosts } from '@/data';

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const post = getPostById(id);

    if (!post) {
        return {
            title: 'Artículo no encontrado',
        };
    }

    return {
        title: `${post.title} | Blog TEKO`,
        description: post.excerpt,
        keywords: [
            'inversión terrenos paraguay',
            post.category.toLowerCase(),
            'blog inmobiliario',
        ],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            images: [post.image],
        },
    };
}

export default async function Page({ params }: Props) {
    const { id } = await params;
    const post = getPostById(id);

    if (!post) {
        notFound();
    }

    // JSON-LD for BlogPosting schema
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: post.image,
        author: {
            '@type': 'Organization',
            name: post.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'TEKO Bienes Raíces',
            logo: {
                '@type': 'ImageObject',
                url: 'https://teko.com.py/logo-symbol.png',
            },
        },
        datePublished: '2026-02-15',
        description: post.excerpt,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogPostPage post={post} />
        </>
    );
}
