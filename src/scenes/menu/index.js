import React, { Component } from 'react'
import Layout from '../../components/Layout/Layout'
import s from './styles.css'
import { title, html } from './index.md'

class MenuPage extends Component {
  componentDidMount() {
    document.title = title
  }

  render() {
    return (
      <Layout className={s.content}>
        <h3 className={s.pageTitle}>
          {title}
        </h3>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-grid">
              <div
                className="mdl-cell mdl-cell--7-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet"
                style={{
                  backgroundImage:
                    'url("http://breakingbao.com/images/based.jpg")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0px center',
                  border: '1px solid black',
                  minHeight: '350px'
                }}
              />
              <div className="mdl-cell mdl-cell--5-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                <h1 className={s.abril}>BA$ED</h1>
                <h5>Ingredients</h5>
                <ul className={s.ingredients}>
                  <li>Braised Pork Belly</li>
                  <li>Pickled Mustard Greens</li>
                  <li>Crushed Peanuts</li>
                  <li>Brown Sugar</li>
                  <li>Cilantro</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col-desktop mdl-cell--hide-phone mdl-cell--hide-tablet">
            <div className="mdl-grid">
              <div
                className={`mdl-cell mdl-cell--5-col-desktop ${s.rightAlign}`}
              >
                <h1 className={s.shadows}>The Kolonel</h1>
                <h5>Ingredients</h5>
                <ul className={s.ingredients}>
                  <li>Fried Chicken</li>
                  <li>Spicy Kolonel Sauce</li>
                  <li>Pickled Carrots &amp; Daikon</li>
                  <li>Green Onion</li>
                  <li>Sesame Seeds</li>
                </ul>
              </div>
              <div
                className="mdl-cell mdl-cell--7-col-desktop"
                style={{
                  backgroundImage:
                    'url("http://breakingbao.com/images/kfc.jpg")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0px center',
                  border: '1px solid black',
                  minHeight: '350px'
                }}
              />
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--hide-desktop">
            <div className="mdl-grid">
              <div
                className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet"
                style={{
                  backgroundImage:
                    'url("http://breakingbao.com/images/kfc.jpg")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0px center',
                  border: '1px solid black',
                  minHeight: '350px'
                }}
              />
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                <h1 className={s.shadows}>The Kolonel</h1>
                <h5>Ingredients</h5>
                <ul className={s.ingredients}>
                  <li>Fried Chicken</li>
                  <li>Spicy Kolonel Sauce</li>
                  <li>Pickled Carrots &amp; Daikon</li>
                  <li>Green Onion</li>
                  <li>Sesame Seeds</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-grid">
              <div
                className="mdl-cell mdl-cell--7-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet"
                style={{
                  backgroundImage:
                    'url("http://breakingbao.com/images/tamchick.jpg")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0px center',
                  border: '1px solid black',
                  minHeight: '350px'
                }}
              />
              <div className="mdl-cell mdl-cell--5-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                <h1 className={s.shadows}>Thai-Dai</h1>
                <h5>Ingredients</h5>
                <ul className={s.ingredients}>
                  <li>Shredded Chicken</li>
                  <li>Thai Tamarind Sauce</li>
                  <li>Pickled Daikon</li>
                  <li>Green Onion</li>
                  <li>Sesame Seeds</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col mdl-cell--hide-phone mdl-cell--hide-tablet">
            <div className="mdl-grid">
              <div
                className={`mdl-cell mdl-cell--5-col-desktop ${s.rightAlign}`}
              >
                <h1 className={s.lobster}>Laab City</h1>
                <h5>Ingredients</h5>
                <ul className={s.ingredients}>
                  <li>Thai Ground Beef</li>
                  <li>Pickled Cucumbers</li>
                  <li>Cilantro</li>
                  <li>Sesame Seeds</li>
                </ul>
              </div>
              <div
                className="mdl-cell mdl-cell--7-col-desktop"
                style={{
                  backgroundImage:
                    'url("http://breakingbao.com/images/laab.jpg")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0px center',
                  border: '1px solid black',
                  minHeight: '350px'
                }}
              />
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--hide-desktop">
            <div className="mdl-grid">
              <div
                className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet"
                style={{
                  backgroundImage:
                    'url("http://breakingbao.com/images/laab.jpg")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0px center',
                  border: '1px solid black',
                  minHeight: '350px'
                }}
              />
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--7-col-tablet">
                <h1 className={s.lobster}>Laab City</h1>
                <h5>Ingredients</h5>
                <ul className={s.ingredients}>
                  <li>Thai Ground Beef</li>
                  <li>Pickled Cucumbers</li>
                  <li>Cilantro</li>
                  <li>Sesame Seeds</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-grid">
              <div
                className="mdl-cell mdl-cell--7-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet"
                style={{
                  backgroundImage:
                    'url("http://breakingbao.com/images/sloppy.jpg")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0px center',
                  border: '1px solid black',
                  minHeight: '350px'
                }}
              />
              <div className="mdl-cell mdl-cell--5-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                <h1 className={s.satisfy}>Sloppy Jack</h1>
                <h5>Ingredients</h5>
                <ul className={s.ingredients}>
                  <li>Shredded Jack Fruit</li>
                  <li>Spicy Kolonel Sauce</li>
                  <li>Pickled Carrots and Daikon</li>
                  <li>Green Onions</li>
                  <li>Sesame Seeds</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col mdl-cell--hide-phone mdl-cell--hide-tablet">
            <div className="mdl-grid">
              <div
                className={`mdl-cell mdl-cell--5-col-desktop ${s.rightAlign}`}
              >
                <h1 className={s.satisfy}>BB Fries</h1>
                <h5>Ingredients</h5>
                <ul className={s.ingredients}>
                  <li>Red Pepper Flakes</li>
                  <li>Semi-Sweet Glaze</li>
                  <li>Cilantro</li>
                  <li>Sesame Seeds</li>
                </ul>
              </div>
              <div
                className="mdl-cell mdl-cell--7-col-desktop"
                style={{
                  backgroundImage:
                    'url("http://breakingbao.com/images/fry.jpg")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0px center',
                  border: '1px solid black',
                  minHeight: '350px'
                }}
              />
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--hide-desktop">
            <div className="mdl-grid">
              <div
                className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet"
                style={{
                  backgroundImage:
                    'url("http://breakingbao.com/images/fry.jpg")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '0px center',
                  border: '1px solid black',
                  minHeight: '350px'
                }}
              />
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--7-col-tablet">
                <h1 className={s.satisfy}>BB Fries</h1>
                <h5>Ingredients</h5>
                <ul className={s.ingredients}>
                  <li>Red Pepper Flakes</li>
                  <li>Semi-Sweet Glaze</li>
                  <li>Cilantro</li>
                  <li>Sesame Seeds</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Layout>
    )
  }
}

export default MenuPage