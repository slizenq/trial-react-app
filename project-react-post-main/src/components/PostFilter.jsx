import React from "react";
import Select from "./UI/select/Select";
import Input from "./UI/input/Input";

const PostFilter = ({filter, setFilter}) =>{

    return(
        <div>
        <Input value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})} placeholder='Поиск...'/>
        <Select value={filter.sort} onChange={seletedSort =>setFilter({...filter, sort:seletedSort})} defaultValue='Сортировка' options={[
              {value:'title', name:'По названию'},
              {value:'body', name:'По описанию'}
            ]}
          />
      </div>
    )
}

export default PostFilter