import React, { useState, useEffect } from 'react'

import ProductLogo from '../../assets/product-logo.svg'
import CardProduct from '../../components/CardProduct'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ProductsImg,
  CategoryButton,
  CategoryMenu,
  ContainerProducts
} from './styles'

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allproducts } = await api.get('products')

      const newProducts = allproducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadCategories()
    loadProducts()
  }, [])
  return (
    <Container>
      <ProductsImg src={ProductLogo} alt="logo da home" />
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
      <ContainerProducts>
        {products &&
          products.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ContainerProducts>
    </Container>
  )
}

export default Products
