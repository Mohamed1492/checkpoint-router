import React from 'react'

const Rating = ({rating,ratingFunction}) => {
    const stars=(rating)=> {
    var tab=[];
    for(let i=1;i<=5;i++){
    i<=rating ? tab.push(<span onClick={()=> ratingFunction(i)} style={{color: "gold" , fontSize:"30px" , cursor:"grab"}}>✭</span>):
    tab.push(<span onClick={()=> ratingFunction(i)} style={{color: "grey" , fontSize:"20px" , cursor:"grab"}}>✭</span>);
    }
    return tab
    }
  return (
    <div><b>Rating:</b> {React.Children.toArray(stars(rating))}</div>
  )
}
Rating.defaultProps = {
    ratingFunction: () => {},
  };

export default Rating
