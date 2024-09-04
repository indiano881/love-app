type ListProps ={
  combinations: string[]
}

const List = ({combinations}:ListProps) => {
    return (
      <div className="flex">
        <h2>History</h2>
        <div>
          {combinations.map((item:string, index:number)=> <h5 key={index}>{item}</h5>)}
        </div>
      </div>
    )
};

export default List
