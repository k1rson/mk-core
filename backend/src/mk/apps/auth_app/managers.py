from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _

class UserManager(BaseUserManager):
    '''
        Defines user creation fields and manages to save user
    '''
    
    def create_user(self, username: str, email: str, password = None):
        if not (username and email):
            raise ValueError('Username and email must be set when u create user object')
        
        user_obj = self.model(email=self.normalize_email(email), username=username)
        user_obj.set_password(password)
        user_obj.save(using=self._db)

        return user_obj

    def create_staffuser(self, username: str, email: str, password = None):
        user_obj = self.create_user(username, email, password)
        
        user_obj.is_staff = True
        user_obj.save(using=self._db)

        return user_obj

    def create_superuser(self, username: str, email: str, password = None):
        user_obj = self.create_user(username, email, password)
        
        user_obj.is_staff = True
        user_obj.is_admin = True
        user_obj.save(using=self._db)

        return user_obj