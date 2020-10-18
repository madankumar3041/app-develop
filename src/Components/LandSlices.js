
import React from 'react';
import firebase from '../config/firebase';
class LandSlices extends React.Component {
constructor(props) {
    
    super(props);
   
    this.state = {Landslist : []}
    }
    
  componentDidMount() {
      firebase.database().ref("Landslist").on("value", snapshot => {
        let Landlist = [];
        snapshot.forEach(snap => {
            Landlist.push(snap.val());
        });
        this.setState({ Landslist: Landlist });
      }); 
 }
  render(){
  return (
		<div>
					            <div className="cpy">
		 <section className="pte">
		</section>
		<header className="header">
	    <h1 className="title">LAND FOR SALE</h1>
		 <div className="sub-titles">Exclusive offers on lands</div>
		 </header>
		
	 <div className="section-content">   
	 {this.state.Landslist.map(data => {
                
								return (
										<div className="css">
										<div className="slider-inner">
											 <div className="dl">      
												<div className="slide-element">
												 <div className="cs">
													 <a target="_blank" className="ctd" href="">
											 
														 <div className="image"> 
														 <img src={data.image} width="350" height="220"/>
															 </div>
															 <div className="info ">
																 <div className="name ">
															 <h4>{data.name}</h4>
																 </div>
															 
																 <div className="title ">
								<h5>{data.title}</h5>
																	 </div>
																	 <div className="address">
																		 <h5>{data.address}</h5>
																		 </div>
							 
																	 <div className="price">
																		 <span className="rupee-icon"></span>
																		 <h4>{data.price}</h4>
																	 </div>
															 </div>
														 </a>
												 </div>							
											 </div>
											 </div>
													</div>
											</div>
										
								);
							 
								})}
	
</div>   
            </div>
      
 			</div>
	)
}
}
export default LandSlices;