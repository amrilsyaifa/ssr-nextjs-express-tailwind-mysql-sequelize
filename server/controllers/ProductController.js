const model = require('../models')
const Product = model.Products;
const ProductTypes = model.ProductTypes;
const ProductDetails = model.ProductDetails;

module.exports = {
    createProduct: (req, res) => {
        const { name, product_code } = req.body;
        Product.create({
            name,
            product_code
        }).then((data) => {
            res.status(200).send({
                'status': 'success',
                'messages': 'Product berhasil ditambahkan',
                'data': data
            });
        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    },
    updateProduct: (req, res) => {
        const { name, product_code, id } = req.body;
        Product.update({ name, product_code }, { where: { id } }).then((data) => {
            if (data[0] == 1) {
                return Product.findOne({
                    where: { id }
                }).then((datasearch) => {
                    res.status(200).send({
                        'status': 'success',
                        'messages': 'Product berhasil diubah',
                        'data': datasearch
                    });
                }).catch((error) => {
                    res.status(404).send({
                        'status': 'error',
                        'messages': 'data not found',
                        'data': error,
                    })
                })
            } else {
                return res.status(404).send({
                    'status': 'error',
                    'messages': 'data not found',
                    'data': '',
                })
            }
        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    },
    deleteProduct: (req, res) => {
        const { id } = req.body;
        Product.destroy({ where: { id } }).then((data) => {
            if (data == 1) {
                res.status(200).send({
                    'status': 'success',
                    'messages': 'Product berhasil dihapus',
                    'data': data
                });
            } else {
                res.status(404).send({
                    'status': 'error',
                    'messages': 'data not found',
                    'data': '',
                })
            }

        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    },
    findOneProduct: (req, res) => {
        const { id } = req.body;
        Product.findOne({
            include: [{
                model: ProductTypes
            }], where: { id },
        }).then((data) => {
            if (data) {
                res.status(200).send({
                    'status': 'success',
                    'messages': 'Product berhasil ditemukan',
                    'data': data
                });
            } else {
                res.status(404).send({
                    'status': 'error',
                    'messages': 'data not found',
                    'data': '',
                })
            }
        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    },
    findAllProduct: (req, res) => {
        Product.findAll({
            include: [{
                model: ProductTypes,
                include: [{
                    model: ProductDetails
                }]
            }]
        }).then((data) => {
            if (data) {
                res.status(200).send({
                    'status': 'success',
                    'messages': 'Products berhasil ditemukan',
                    'data': data
                });
            } else {
                res.status(404).send({
                    'status': 'error',
                    'messages': 'data not found',
                    'data': '',
                })
            }

        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    },


    //product type
    createProductType: (req, res) => {
        const { productId, name, photo, product_types_code } = req.body;
        ProductTypes.create({
            productId,
            name,
            photo,
            product_types_code
        }).then((data) => {
            res.status(200).send({
                'status': 'success',
                'messages': 'Product Type berhasil ditambahkan',
                'data': data
            });
        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    },
    updateProductType: (req, res) => {
        const { productId, name, photo, product_types_code, id } = req.body;
        ProductTypes.update({ productId, name, photo, product_types_code }, { where: { id } }).then((data) => {
            if (data[0] == 1) {
                return ProductTypes.findOne({
                    where: { id }
                }).then((datasearch) => {
                    res.status(200).send({
                        'status': 'success',
                        'messages': 'Product Type berhasil diubah',
                        'data': datasearch
                    });
                }).catch((error) => {
                    res.status(404).send({
                        'status': 'error',
                        'messages': 'data not found',
                        'data': error,
                    })
                })
            } else {
                return res.status(404).send({
                    'status': 'error',
                    'messages': 'data not found',
                    'data': '',
                })
            }
        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    },
    deleteProductType: (req, res) => {
        const { id } = req.body;
        Product.destroy({ where: { id } }).then((data) => {
            if (data == 1) {
                res.status(200).send({
                    'status': 'success',
                    'messages': 'Product Type berhasil dihapus',
                    'data': data
                });
            } else {
                res.status(404).send({
                    'status': 'error',
                    'messages': 'data not found',
                    'data': '',
                })
            }

        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    },
    findOneProductType: (req, res) => {
        const { id } = req.body;
        ProductTypes.findOne({
            where: { id }
        }).then((data) => {
            if (data) {
                res.status(200).send({
                    'status': 'success',
                    'messages': 'Product Type berhasil ditemukan',
                    'data': data
                });
            } else {
                res.status(404).send({
                    'status': 'error',
                    'messages': 'data not found',
                    'data': '',
                })
            }
        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    },
    findAllProductType: (req, res) => {
        ProductTypes.findAll({}).then((data) => {
            if (data) {
                res.status(200).send({
                    'status': 'success',
                    'messages': 'Product Type berhasil ditemukan',
                    'data': data
                });
            } else {
                res.status(404).send({
                    'status': 'error',
                    'messages': 'data not found',
                    'data': '',
                })
            }

        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    },



    //product details
    createProductDetail: (req, res) => {
        const { productTypeId, name, product_detail_code, price, capital_price, best_price, description } = req.body;
        ProductDetails.create({
            productTypeId,
            name,
            product_detail_code,
            price,
            capital_price,
            best_price,
            description
        }).then((data) => {
            res.status(200).send({
                'status': 'success',
                'messages': 'Product Type berhasil ditambahkan',
                'data': data
            });
        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    },
    updateProductDetail: (req, res) => {
        const { productId, name, photo, product_types_code, id } = req.body;
        ProductTypes.update({ productId, name, photo, product_types_code }, { where: { id } }).then((data) => {
            if (data[0] == 1) {
                return ProductTypes.findOne({
                    where: { id }
                }).then((datasearch) => {
                    res.status(200).send({
                        'status': 'success',
                        'messages': 'Product Type berhasil diubah',
                        'data': datasearch
                    });
                }).catch((error) => {
                    res.status(404).send({
                        'status': 'error',
                        'messages': 'data not found',
                        'data': error,
                    })
                })
            } else {
                return res.status(404).send({
                    'status': 'error',
                    'messages': 'data not found',
                    'data': '',
                })
            }
        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    },
    deleteProductDetail: (req, res) => {
        const { id } = req.body;
        Product.destroy({ where: { id } }).then((data) => {
            if (data == 1) {
                res.status(200).send({
                    'status': 'success',
                    'messages': 'Product Type berhasil dihapus',
                    'data': data
                });
            } else {
                res.status(404).send({
                    'status': 'error',
                    'messages': 'data not found',
                    'data': '',
                })
            }

        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    },
    findOneProductDetail: (req, res) => {
        const { id } = req.body;
        ProductTypes.findOne({
            where: { id }
        }).then((data) => {
            if (data) {
                res.status(200).send({
                    'status': 'success',
                    'messages': 'Product Type berhasil ditemukan',
                    'data': data
                });
            } else {
                res.status(404).send({
                    'status': 'error',
                    'messages': 'data not found',
                    'data': '',
                })
            }
        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    },
    findAllProductDetail: (req, res) => {
        ProductTypes.findAll({}).then((data) => {
            if (data) {
                res.status(200).send({
                    'status': 'success',
                    'messages': 'Product Type berhasil ditemukan',
                    'data': data
                });
            } else {
                res.status(404).send({
                    'status': 'error',
                    'messages': 'data not found',
                    'data': '',
                })
            }

        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    }

}