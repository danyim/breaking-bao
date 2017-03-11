import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class MenuPage extends React.Component {
  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <h3>{title}</h3>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <div className="mdl-grid">
              <div
                className="mdl-cell mdl-cell--7-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet"
                style={{
                  backgroundImage: 'url("http://www.seriouseats.com/images/2014/03/20140324-taiwaneats-porkbellybuns-finished.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center middle',
                  border: '1px solid black',
                  minHeight: '250px',
                }}
              />
              <div className="mdl-cell mdl-cell--5-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                <h1 className={s.abril}>
                  BA$ED
                </h1>
                <h5>Ingredients</h5>
                <ul>
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
              <div className={`mdl-cell mdl-cell--5-col-desktop ${s.rightAlign}`}>
                <h1 className={s.lobster}>
                  Laab City
                </h1>
                <h5>Ingredients</h5>
                <ul>
                  <li>Thai Ground Beef</li>
                  <li>Pickled Cucumbers</li>
                  <li>Cilantro</li>
                  <li>Sesame Seeds</li>
                </ul>
              </div>
              <div
                className="mdl-cell mdl-cell--7-col-desktop"
                style={{
                  backgroundImage: 'url("http://steamykitchen.com/wp-content/uploads/2012/07/pork-belly-buns-recipe-8380.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center middle',
                  border: '1px solid black',
                  minHeight: '250px',
                }}
              />
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--hide-desktop">
            <div className="mdl-grid">
              <div
                className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet"
                style={{
                  backgroundImage: 'url("http://steamykitchen.com/wp-content/uploads/2012/07/pork-belly-buns-recipe-8380.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center middle',
                  border: '1px solid black',
                  minHeight: '250px',
                }}
              />
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                <h1 className={s.lobster}>
                  Laab City
                </h1>
                <h5>Ingredients</h5>
                <ul>
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
                  backgroundImage: 'url("http://bucket.wowbao.com/wp-content/uploads/baobuns.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center middle',
                  border: '1px solid black',
                  minHeight: '250px',
                }}
              />
              <div className="mdl-cell mdl-cell--5-col-desktop mdl-cell--12-col-phone mdl-cell--12-col-tablet">
                <h1 className={s.satisfy}>
                  Thai Dai
                </h1>
                <h5>Ingredients</h5>
                <ul>
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
              <div className={`mdl-cell mdl-cell--5-col-desktop ${s.rightAlign}`}>
                <h1 className={s.shadows}>
                  Sloppy Jack
                </h1>
                <h5>Ingredients</h5>
                <ul>
                  <li>Shredded Jack Fruit</li>
                  <li>Korean Fried Chicken Sauce</li>
                  <li>Pickled Carrots and Daikon</li>
                  <li>Green Onions</li>
                  <li>Sesame Seeds</li>
                </ul>
              </div>
              <div
                className="mdl-cell mdl-cell--7-col-desktop"
                style={{
                  backgroundImage: 'url("http://cdnwp.audiencemedia.com/wp-content/uploads/2016/01/615296-1-eng-GB_how-to-make-bao-buns-960x420.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center middle',
                  border: '1px solid black',
                  minHeight: '250px',
                }}
              />
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--hide-desktop">
            <div className="mdl-grid">
              <div
                className="mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet"
                style={{
                  backgroundImage: 'url("http://cdnwp.audiencemedia.com/wp-content/uploads/2016/01/615296-1-eng-GB_how-to-make-bao-buns-960x420.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center middle',
                  border: '1px solid black',
                  minHeight: '250px',
                }}
              />
              <div className="mdl-cell mdl-cell--12-col-phone mdl-cell--7-col-tablet">
                <h1 className={s.shadows}>
                  Sloppy Jack
                </h1>
                <h5>Ingredients</h5>
                <ul>
                  <li>Shredded Jack Fruit</li>
                  <li>Korean Fried Chicken Sauce</li>
                  <li>Pickled Carrots and Daikon</li>
                  <li>Green Onions</li>
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
    );
  }

}

export default MenuPage;