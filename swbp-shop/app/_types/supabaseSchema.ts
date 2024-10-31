// > swbp-shop@0.1.0 supabase
// > supabase gen types typescript --project-id=plpcdcscmncfuatmrffu

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      likes: {
        Row: {
          all_likes: number | null;
          created_at: string;
          id: number;
        };
        Insert: {
          all_likes?: number | null;
          created_at?: string;
          id?: number;
        };
        Update: {
          all_likes?: number | null;
          created_at?: string;
          id?: number;
        };
        Relationships: [];
      };
      payments: {
        Row: {
          created_at: string;
          id: number;
          payment_id: string | null;
          product_id: number | null;
          userid: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          payment_id?: string | null;
          product_id?: number | null;
          userid: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          payment_id?: string | null;
          product_id?: number | null;
          userid?: string;
        };
        Relationships: [
          {
            foreignKeyName: "payments_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          }
        ];
      };
      products: {
        Row: {
          back_img: string | null;
          created_at: string;
          description: string | null;
          front_img: string | null;
          id: number;
          name: string;
          price: number;
        };
        Insert: {
          back_img?: string | null;
          created_at?: string;
          description?: string | null;
          front_img?: string | null;
          id?: number;
          name?: string;
          price?: number;
        };
        Update: {
          back_img?: string | null;
          created_at?: string;
          description?: string | null;
          front_img?: string | null;
          id?: number;
          name?: string;
          price?: number;
        };
        Relationships: [];
      };
      trainings: {
        Row: {
          created_at: string;
          description: string | null;
          endDate: string | null;
          id: number;
          numDip: number | null;
          numPullUp: number | null;
          numPushUp: number | null;
          startDate: string | null;
          title: string | null;
          trainingStrength: number | null;
          userid: string | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          endDate?: string | null;
          id?: number;
          numDip?: number | null;
          numPullUp?: number | null;
          numPushUp?: number | null;
          startDate?: string | null;
          title?: string | null;
          trainingStrength?: number | null;
          userid?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          endDate?: string | null;
          id?: number;
          numDip?: number | null;
          numPullUp?: number | null;
          numPushUp?: number | null;
          startDate?: string | null;
          title?: string | null;
          trainingStrength?: number | null;
          userid?: string | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          avatar: string | null;
          birthDate: string | null;
          created_at: string;
          id: number;
          nickName: string | null;
          userid: string | null;
        };
        Insert: {
          avatar?: string | null;
          birthDate?: string | null;
          created_at?: string;
          id?: number;
          nickName?: string | null;
          userid?: string | null;
        };
        Update: {
          avatar?: string | null;
          birthDate?: string | null;
          created_at?: string;
          id?: number;
          nickName?: string | null;
          userid?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;
