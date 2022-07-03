import css from "./Statistics.module.css"

import PropTypes from 'prop-types';

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const Statistics = ({ title, stats })  =>{
    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
  
        <ul className={css.statlist}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                className={css.item}
                key={id}
                style={{backgroundColor: getRandomHexColor() }}
              >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
  };