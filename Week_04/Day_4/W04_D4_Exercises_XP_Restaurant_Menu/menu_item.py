import psycopg2


from constants import DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USER
from menu_manager import Menu_manager


class Menu_item:

    def __init__(self, name: str, price: int | float) -> None:
        self.name = name
        self.price = price
        self.item_id = None
        self.connect_to_db()

    def save(self):
        conn = Menu_item.connect_to_db()
        with conn.cursor() as cur:
            cur.execute("INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s) RETURNING item_id;", (self.name, self.price))
            self.item_id = cur.fetchone()[0]
        conn.commit()
        conn.close()


    def delete(self):
        conn = Menu_item.connect_to_db()
        with conn.cursor() as cur:
            cur.execute("DELETE FROM menu_items WHERE item_name = %s AND item_price = %s RETURNING item_id;", (self.name, self.price))
            self.item_id = cur.fetchall()
        conn.commit()
        conn.close()


    def update(self, name, price):

        if not Menu_manager.get_by_name(self.name):
            Menu_item(name, price).save()

        else:
            conn = Menu_item.connect_to_db()
            with conn.cursor() as cur:
                cur.execute("UPDATE menu_items SET item_name = %s, item_price = %s WHERE "
                            "item_name = %s AND item_price = %s RETURNING item_id;", (name, price, self.name, self.price))
                self.item_id = cur.fetchall()
            conn.commit()
            conn.close()

    
    @classmethod
    def connect_to_db(cls) -> object:
        connection = psycopg2.connect(dbname=DATABASE_NAME, user=DATABASE_USER, password=DATABASE_PASSWORD)
        return connection




def main():
    
    item = Menu_item('Burger', 35)
    item.save()
    item.delete()
    item.update('Veggie Burger', 37)
    print(Menu_manager.get_by_name('Beef Stew'))
    print(Menu_manager.all_items())



if __name__ == "__main__":
    main()