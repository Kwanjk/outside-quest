// app/api/complete-quest/route.js
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request) {
  const body = await request.json();
  const { quest, xp_earned } = body;

  // Inserting with a hardcoded user_id based on your PDF example
  const { data, error } = await supabase
    .from('quests')
    .insert([
      { 
        user_id: '11dcc0eb-534b-4b71-8306-352898263f58', // Placeholder User ID
        quest: quest, 
        xp_earned: xp_earned 
      },
    ])
    .select();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true, data });
}