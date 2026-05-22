import { createClient } from "@/lib/supabase.ts"
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const supabase = createClient()
  return NextResponse.json({ message: "Ruta activa" })
}
