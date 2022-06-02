import PropTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    <div>
      <div div className={`card ${reverse && 'reverse'}`}>
          {children}
          </div>
    </div>
  )

// return(
//     <div className="card" style={{
//         backgroundColor: reverse ? 'rgba(0,0,0,0.4': '#fff',
//         textColor: reverse ? '#fff' : '#fff',
//     }}></div>
// )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card
