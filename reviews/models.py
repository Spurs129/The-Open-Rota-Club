from django.db import models

# Create your models here.
class Review(models.Model):
  user = models.ForeignKey(
    "jwt_auth.User",
    related_name = "reviews",
    on_delete= models.CASCADE
  )
  venue = models.ForeignKey(
    "venues.Venue",
    related_name = "reviews",
    on_delete = models.CASCADE
  )
  score = models.PositiveIntegerField(default=0)
  rating = models.PositiveIntegerField(default=0)
  text = models.TextField(max_length=300)
  created_at = models.DateTimeField(auto_now_add=True)
  
  