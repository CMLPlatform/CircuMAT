from django.test import SimpleTestCase
from django.urls import reverse


class ViewsTests(SimpleTestCase):
    def test_home_page_status_code(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_status_code_tool(self):
        response = self.client.get('/circumat/')
        self.assertEqual(response.status_code, 200)

    def test_view_url_by_name(self):
        response = self.client.get(reverse('homePage'))
        self.assertEqual(response.status_code, 200)

    def test_view_url_by_name_tool(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)

    def test_view_uses_correct_template(self):
        response = self.client.get(reverse('homePage'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'circumatMasterProject/home.html')

    def test_view_uses_correct_template_tool(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'circumat/home.html')
