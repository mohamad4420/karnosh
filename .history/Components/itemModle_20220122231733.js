


export default function ItemModle(props){
return(
    <>
      <div className="row">
        <div className="Columen">
           <h4>{props.data[0].name} </h4>
           <p>{props.data[0].data}</p>
        </div>
        <div className="Columen">
            <h4>{props.data[1].name}</h4>
                <p>{props.data[1].data}</p>
            </div>
         </div>
    </>
)
}