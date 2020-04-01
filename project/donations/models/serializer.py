from django.contrib.auth.models import User

def serialize(class_):
    def to_json(self):
        res = {}
        for field in self._meta.get_fields():
            value = getattr(self, field.name, None)
            if type(field).__name__ == 'ManyToOneRel': continue
            if 'donations.models' in str(type(value).__module__):
                value = value.to_json()
            if type(value) == User:
                value = value.username
            res[field.name] = value
        return res

    class_.to_json = to_json
    return class_ 