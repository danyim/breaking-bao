import React from 'react'
import styled from 'styled-components'
import based from '../../assets/images/based.jpg'
import fry from '../../assets/images/fry.jpg'
import kfc from '../../assets/images/kfc.jpg'
import laab from '../../assets/images/laab.jpg'
import logo from '../../assets/images/logo.png'
import sloppy from '../../assets/images/sloppy.jpg'
import tamchick from '../../assets/images/tamchick.jpg'

import Layout from '../../components/Layout/Layout'

const Container = styled(Layout)`
  .menu-item {
    display: flex;
    flex-flow: row nowrap;
    margin: 1rem 0;
    justify-content: flex-start;

    .menu-item-image {
      order: 1;
      width: 450px;
    }
    .menu-item-info {
      order: 2;
      margin: 0 3rem;
    }

    .menu-item-info h1 {
      margin: 0.5rem 0 0.75rem;
    }
    .menu-item-info .ingredients {
      margin-top: 0;
      padding-left: 1.5rem;
      & li {
        font-family: 'Dosis', serif;
        font-size: 16px;
      }
    }
  }

  .menu-item:nth-child(2n + 1) {
    justify-content: flex-end;

    .menu-item-image {
      order: 2;
    }
    .menu-item-info {
      order: 1;
    }
  }

  & .abril {
    font-family: 'Abril Fatface', serif;
  }

  & .lobster {
    font-family: 'Lobster', serif;
  }

  & .satisfy {
    font-family: 'Satisfy', serif;
  }

  & .shadows {
    font-family: 'Shadows Into Light', serif;
  }

  @media screen and (max-width: 1024px) {
    & .menu-item {
      flex-flow: column nowrap;
      .menu-item-image {
        width: calc(100% - 2rem);
        margin: 0 1rem;
      }
    }

    & .menu-item:nth-child(2n + 1) {
      justify-content: flex-end;

      .menu-item-image {
        order: 1;
      }
      .menu-item-info {
        order: 2;
      }
    }
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

const IMAGES = {
  based,
  fry,
  kfc,
  laab,
  logo,
  sloppy,
  tamchick
}

const MENU_ITEMS = [
  {
    id: 'based',
    title: 'BA$ED',
    imgUrl: IMAGES.based,
    fontClassName: 'abril',
    ingredients: [
      'Braised Pork Belly',
      'Pickled Mustard Greens',
      'Crushed Peanuts',
      'Brown Sugar',
      'Cilantro'
    ]
  },
  {
    id: 'kolonel',
    title: 'The Kolonel',
    imgUrl: IMAGES.kfc,
    fontClassName: 'shadows',
    ingredients: [
      'Fried Chicken',
      'Spicy Kolonel Sauce',
      'Pickled Carrots &amp; Daikon',
      'Green Onion',
      'Sesame Seeds'
    ]
  },
  {
    id: 'thaidai',
    title: 'Thai-Dai',
    imgUrl: IMAGES.tamchick,
    fontClassName: 'shadows',
    ingredients: [
      'Shredded Chicken',
      'Thai Tamarind Sauce',
      'Pickled Daikon',
      'Green Onion',
      'Sesame Seeds'
    ]
  },
  {
    id: 'laabcity',
    title: 'Laab City',
    imgUrl: IMAGES.laab,
    fontClassName: 'lobster',
    ingredients: ['Thai Ground Beef', 'Pickled Cucumbers', 'Cilantro', 'Sesame Seeds']
  },
  {
    id: 'sloppyjack',
    title: 'Sloppy Jack',
    imgUrl: IMAGES.sloppy,
    fontClassName: 'satisfy',
    ingredients: [
      'Shredded Jack Fruit',
      'Spicy Kolonel Sauce',
      'Pickled Carrots and Daikon',
      'Green Onions',
      'Sesame Seeds'
    ]
  },
  {
    id: 'bbfries',
    title: 'BB Fries',
    imgUrl: IMAGES.fry,
    fontClassName: 'satisfy',
    ingredients: ['Red Pepper Flakes', 'Semi-Sweet Glaze', 'Cilantro', 'Sesame Seeds']
  }
]

const MenuPage = () => (
  <Container title="Menu">
    {MENU_ITEMS.map(menuItem => (
      <div className="menu-item" key={menuItem.id}>
        <ItemImage className="menu-item-image" url={menuItem.imgUrl} />
        <div className="menu-item-info">
          <h1 className={menuItem.fontClassName}>{menuItem.title}</h1>
          <ul className="ingredients">
            {menuItem.ingredients.map(i => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </Container>
)

export default MenuPage
