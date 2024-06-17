# Instructions :
#     Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.
#     The Pagination class will accept 2 parameters:
#         items (default: None): It will contain a list of contents to paginate.
#         pageSize (default: 10): The amount of items to show in each page.
#     So for example we could initialize our pagination like this:
#     alphabetList = list("abcdefghijklmnopqrstuvwxyz")
#     p = Pagination(alphabetList, 4)
#     The Pagination class will have a few methods:
#         getVisibleItems() : returns a list of items visible depending on the pageSize
#     So for example we could use this method like this:
#     p.getVisibleItems() 
#     # ["a", "b", "c", "d"]
#         You will have to implement various methods to go through the pages such as:
#             prevPage()
#             nextPage()
#             firstPage()
#             lastPage()
#             goToPage(pageNum)
# Here’s a continuation of the example above using nextPage and lastPage:
# alphabetList = list("abcdefghijklmnopqrstuvwxyz")
# p = Pagination(alphabetList, 4)
# p.getVisibleItems() 
# # ["a", "b", "c", "d"]
# p.nextPage()
# p.getVisibleItems()
# # ["e", "f", "g", "h"]
# p.lastPage()
# p.getVisibleItems()
# # ["y", "z"]
# Notes

#     The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
#     The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage()
#     Please set the p.totalPages and p.currentPage attributes to the appropriate number as there cannot be a page 0.
#     If a page is outside of the totalPages attribute, then the goToPage method should go to the closest page to the number provided (e.g. there are only 5 total pages, but p.goToPage(10) is given: the p.currentPage should be set to 5; if 0 or a negative number is given, p.currentPage should be set to 1).

class Pagination:

    current_start_item = 0
    totalPages = 1

    def __init__(self, items=None, pageSize=10) -> None:
        self.items = items
        self.pageSize = pageSize
        self.totalPages = (len(self.items) // self.pageSize) + 1

    def firstPage(self):
        self.current_start_item = 0
        return self

    def lastPage(self):
        self.current_start_item = (len(self.items) // self.pageSize) * self.pageSize
        return self
    
    def getVisibleItems(self):
        print(self.items[self.current_start_item : self.current_start_item + self.pageSize])
        return self.items[self.current_start_item : self.current_start_item + self.pageSize]
    
    def nextPage(self):
        if self.current_start_item + self.pageSize < len(self.items):
            self.current_start_item += self.pageSize
        return self
    
    def prevPage(self):
        if self.current_start_item - self.pageSize >= 0:        
            self.current_start_item -= self.pageSize
        return self
    
    def goToPage(self, page):
        if page <= 0:
            page = 1
        if page > self.totalPages:
            page = self.totalPages

        self.current_start_item = self.pageSize * (page - 1)

        return self
    

def main():

    alphabet = list("abcdefghijklmnopqrstuvwxyz")

    p = Pagination(alphabet, 4)

    print("Total pages:", p.totalPages)

    p.firstPage()
    print("   Page 1 - ", end='')
    p.getVisibleItems()
    for step in range(p.totalPages):
        p.nextPage()
        print("Next page - ", end='')
        p.getVisibleItems()

    for step in range(p.totalPages):
        p.prevPage()
        print("Prev page - ", end='')
        p.getVisibleItems()

    for step in range (0, p.totalPages + 2, 1):
        p.goToPage(step)
        print(f"   Page {step} - ", end='')
        p.getVisibleItems()


if __name__ == "__main__":
    main()