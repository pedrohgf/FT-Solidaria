serializable_classes = {}

def serialize(class_):
    serializable_classes[class_.__name__.lower()] = class_
    def to_json(self):
        res = {}
        for field in self._meta.get_fields():
            value = getattr(self, field.name, None)
            if type(field).__name__ == 'ManyToOneRel': continue
            if 'donations.models' in str(type(value).__module__):
                value = value.to_json()
            if type(value).__name__ == 'User':
                value = value.username
            res[field.name] = value
        return res

    if hasattr(class_, 'get_serializable_fields'):
        class_.to_json = lambda self: {field: getattr(self, field, None) for field in class_.get_serializable_fields()}
    else:
        class_.to_json = to_json
    return class_ 