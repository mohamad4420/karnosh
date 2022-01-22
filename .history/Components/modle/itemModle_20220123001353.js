import loadable from '@loadable/component'


export default function ItemModle(props){
return(
    <>
      <div className="row">
        <div className="Columen">
           <h4>{props.firstName} </h4>
           <p>{props.firstData}</p>
        </div>
        <div className="Columen">
            <h4>{props.lastName}</h4>
                <p>{props.lastData}</p>
            </div>
         </div>
    </>
)
}