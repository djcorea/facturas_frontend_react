import { useNavigate } from "react-router-dom"

export const LoginPage=()=>{
    const navigate = useNavigate();

    const handleLogin = ()=>{
        localStorage.setItem("cartQuantity",0)
        // localStorage.setItem("shoppingCart",[])
        navigate('/products',{replace:true})
    }
    return (
        <div className="mt-5">
            <h1 className="text text-secondary text-center">
                Login
            </h1>
            <div className='row d-flex justify-content-around'>
                
            <button className="btn btn-primary col-10 "
                onClick={handleLogin}
            >
                Login
            </button>
            </div>
        </div>
    )
}