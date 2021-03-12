import { useEffect } from "react";
import { connect } from "react-redux";
import {fetchLike} from "../../../Redux/Action/CardView"

const Like=(props)=>{
    useEffect(()=>{
        props.fetchLike()
    },[])
    const renderLike=(data)=>{
        var liked= false;
        if(data){
            data.map((val,idx)=>{
                if(props.PostId===val.postId){
                    if(val.userId==="mukul"){
                        return liked=true;
                    }
                }
                    
            })
        }
            if (liked===true){
                return(
                    <button  className="mr-2  btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                    </button>
                )
            }
            else{
                return(
                    <button  className="mr-2  btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </button>
                )
            }
    }
    return(
        <div>
            {renderLike(props.LikeData)}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        LikeData:state.LikeReducer.LikeData
    }
}
export default connect(mapStateToProps,{fetchLike})(Like);