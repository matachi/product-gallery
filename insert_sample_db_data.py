#!/usr/bin/env python
import os

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "productgallery.settings")

    def create_product(name, description, thumbnail):
        Product(name = name, description = description,
                thumbnail = thumbnail).save()

    from products.models import Product

    for i in range(4):
        create_product('Ice Cream', 'The very best ice cream.\n\nIt\'s extremely tasteful!', 'ice-cream.jpg')
        create_product('Bitcoin ATM', 'Buy bitcoins from this epic machine.', 'bitcoin-atm.jpg')
        create_product('Pile of bitcoins', 'Richness!', 'bitcoins.jpg')
        create_product('Horse mask', 'Pretty horse mask...', 'horse-head.jpg')
        create_product('Crazy bitcoin man', 'Buy this beautiful man who loves bitcoin.', 'bitcoin-man.jpg')
