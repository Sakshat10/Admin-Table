import { useSelector, useDispatch } from "react-redux";
import   styled  from "styled-components";
import { MdDeleteForever } from 'react-icons/md';
import { removeUser } from "../store/slices/UserSlice";
// import { deleteUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {

    const dispatch = useDispatch();

    const data = useSelector((state)=>{
        return state.users;
    })

    const deleteUser = (id)=>{
        dispatch(removeUser(id));
    }


  return (
    <Wrapper>
        {
        data.map((user, id)=>{
            return <li key={id}>
                {user}
                <button className="btn-delete" onClick={()=>deleteUser(id)}>
                <MdDeleteForever className='delete-icon'/>
                </button>
            </li>
        })
    }
    </Wrapper>
  )
}

const Wrapper = styled.section`
li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #eee;
    padding: 10px;

    &:first-child{
        border-bottom: 1px solid #eee;
    }

}`

export default DisplayUsers;
