export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      naver_books: {
        Row: {
          author: string
          created_at: string | null
          description: string
          discount: string
          id: number
          image: string | null
          isbn: string
          link: string
          pubdate: string
          publisher: string
          title: string
        }
        Insert: {
          author: string
          created_at?: string | null
          description: string
          discount: string
          id?: number
          image?: string | null
          isbn: string
          link: string
          pubdate: string
          publisher: string
          title: string
        }
        Update: {
          author?: string
          created_at?: string | null
          description?: string
          discount?: string
          id?: number
          image?: string | null
          isbn?: string
          link?: string
          pubdate?: string
          publisher?: string
          title?: string
        }
      }
      reads: {
        Row: {
          book_isbn: string
          created_at: string | null
          id: number
          user_id: string
        }
        Insert: {
          book_isbn: string
          created_at?: string | null
          id?: number
          user_id: string
        }
        Update: {
          book_isbn?: string
          created_at?: string | null
          id?: number
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
