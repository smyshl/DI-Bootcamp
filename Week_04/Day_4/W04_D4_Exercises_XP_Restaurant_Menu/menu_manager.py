import psycopg2


from constants import DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USER


class Menu_manager:
    
    @classmethod
    def get_by_name(cls, name: str):
        conn = Menu_manager.connect_to_db()
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM menu_items WHERE item_name = %s;", (name,))
            item = cur.fetchall()
        conn.close()
        if item:
            return item
    
    
    @classmethod
    def all_items(cls):
        conn = Menu_manager.connect_to_db()
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM menu_items;")
            all_items = cur.fetchall()
        conn.close()
        return all_items


    @classmethod
    def connect_to_db(cls) -> object:
        connection = psycopg2.connect(dbname=DATABASE_NAME, user=DATABASE_USER, password=DATABASE_PASSWORD)
        return connection


def main():
    print(Menu_manager.all_items())
    print(Menu_manager.get_by_name("Salad"))



if __name__ == "__main__":
    main()