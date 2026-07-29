import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';

export async function POST(req: NextRequest) {
  const apiKey = req.headers.get('x-api-key');
  if (!apiKey || apiKey !== process.env.PUBLISH_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: {
    slug?: string;
    title?: string;
    content?: string;
    excerpt?: string;
    tags?: string[];
    type?: 'portfolio' | 'demo';
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { slug, title, content, excerpt, tags, type } = body;

  if (!slug || !title || !content) {
    return NextResponse.json(
      { error: 'Missing required fields: slug, title, content' },
      { status: 400 }
    );
  }

  const { data, error } = await supabaseAdmin
    .from('articles')
    .insert({
      slug,
      title,
      content,
      excerpt: excerpt ?? null,
      tags: tags ?? [],
      type: type ?? 'demo',
    })
    .select()
    .single();

  if (error) {
    // Unique constraint violation on slug
    if (error.code === '23505') {
      return NextResponse.json(
        { error: `An article with slug "${slug}" already exists` },
        { status: 409 }
      );
    }
    console.error('Supabase insert error:', error);
    return NextResponse.json({ error: 'Failed to publish article' }, { status: 500 });
  }

  return NextResponse.json({ success: true, article: data }, { status: 201 });
}
