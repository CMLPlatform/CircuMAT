from django.core.management.base import BaseCommand
from circumat.models import Job
from django_celery_results import models


class Command(BaseCommand):
    """
    Clear database command
    """

    def handle(self, *args, **options):
        print("***removing jobs out of DB***")
        Job.objects.all().delete()
        print("***removing results out of DB***")
        models.TaskResult.objects.all().delete()
