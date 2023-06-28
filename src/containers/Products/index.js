import React, { useState, useEffect } from 'react'

import ProductLogo from '../../assets/product-logo.svg'
import api from '../../services/api'
import { Container, ProductsImg, CategoryButton, CategoryMenu } from './styles'

function Products() {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    loadCategories()
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
    </Container>
  )
}

export default Products
