import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/Layout/Layout'

const Container = styled(Layout)`
  h2 {
    font-family: 'Dosis', sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: -0.015rem;
    font-size: 1.2rem;
    margin: 2.4rem 0 0.8rem;
    text-align: center;
  }
`

const MenuItems = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin: 0.4rem 0;
    display: flex;
    width: 100%;
    margin: 0.8rem 0;
  }

  & [name='item-name'] {
    font-size: 1rem;
    flex: 0 0 180px;
    text-align: right;
    display: inline-block;
    line-height: 1.5rem;
  }

  & [name='item-description'] {
    margin-left: 0.8rem;
    font-style: italic;
    display: inline-block;
    flex: 1 1 auto;
    line-height: 1.5rem;
  }
`

const ItemImage = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px center;
  border: 1px solid black;
  min-height: 350px;
`

const MenuPage = () => (
  <Container title="Menu">
    <h2>Shareables</h2>
    <MenuItems>
      <li>
        <span name="item-name">K-SO</span>
        <span name="item-description">Korean Chile con queso served with wonton chips</span>
      </li>
    </MenuItems>

    <h2>Baos</h2>
    <MenuItems>
      <li>
        <span name="item-name">Gyu Bao</span>
        <span name="item-description">
          Dashi simmered ribeye, spiced radish, green onion, fried garlic, and sesame seeds
        </span>
      </li>
      <li>
        <span name="item-name">Bao Boi</span>
        <span name="item-description">BBQ pork, pickled red onion, fried garlic, and cilantro</span>
      </li>
      <li>
        <span name="item-name">Sloppy Jack</span>
        <span name="item-description">
          Shredded jackfruit, spiced radish, green onion, cilantro, and sesame seeds
        </span>
      </li>
    </MenuItems>

    <h2>Rice Bowls</h2>
    <MenuItems>
      <li>
        <span name="item-name">Gyu Bao Bowl</span>
        <span name="item-description">
          Dashi simmered ribeye, spiced radish, Korean cucumbers, furikake, fried shallots, and
          cilantro over a bed of white rice
        </span>
      </li>
      <li>
        <span name="item-name">Bao Boi Bowl</span>
        <span name="item-description">
          BBQ pork, pickled red onion, Korean cucumbers, furikake, fried garlic, and cilantro over a
          bed of white rice
        </span>
      </li>
    </MenuItems>

    <h2>Sides</h2>
    <MenuItems>
      <li>
        <span name="item-name">Assorted Pickles</span>
        <span name="item-description">Rotating assortment of pickles</span>
      </li>
      <li>
        <span name="item-name">Asian Slaw</span>
        <span name="item-description">
          Green and red cabbage, carrots, green onion, and edamame
        </span>
      </li>
      <li>
        <span name="item-name">Seasoned Wonton Chips</span>
        <span name="item-description">Wonton chips seasoned with house blend seasoning</span>
      </li>
    </MenuItems>

    <h2>Drinks</h2>
    <MenuItems>
      <li>
        <span name="item-name">Yuzu Slush</span>
        <span name="item-description">Refreshing Yuzu flavored slushie</span>
      </li>
      <li>
        <span name="item-name">KOR-Chata</span>
        <span name="item-description">Korean-Mexican Horchata blend</span>
      </li>
    </MenuItems>
  </Container>
)

export default MenuPage
