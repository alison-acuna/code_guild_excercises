import unittest

#because you imported unittest, unittest.unittest

import selenium

# performs all the functions of a user on a web page
#make sure have pip installed selenium and that you have firefox installed
# selenium can also drive in chrome

class ToDoNavigationCreationTest(unittest.TestCase):
# this subclasses which inherits all the methods of its parent class
    def setUp(self):
#automically called at the begining of the class
#written in Camel case
        self.browser = webdriver.Firefox()
        self.browser.implictly_wait(3)
# wait for 3 seconds before running
    def tearDown(self):
        self.browser.quit()

#automatically called at the end of the class
#written in Camel case
    def test_todo_navigation(self):
        # user story goes here
        self.browser.get('http://localhost:8000')
#this tells the browser to navigate to the web page
        self.assertIn('Todo', self.browser.title)
#this is a built in assert method that checks to see if something is in something
# in this case is Todo in the browser title which appears in the head not the header
        heading = self.browser.find_element_by_tag_name('h1')
#this assigns an html element h1 to a python variable heading
        self.assertIn('Todo', heading.text)
#this checks to see if Todo is in the heading text


#


unittest.main()

#automatically runs the functions in unittest





#snake case = snake_case
