import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch Man"]);

    const onAddCategory = (value)=>{
        setCategories([value, ...categories]);
    }

    return (
        <>
        <h1>Gift Expert App</h1>
      {/* <SearchInput setCategories={setCategories}></SearchInput> Primera solucion*/}
        <AddCategory categories = {categories} onNewCategory={value => onAddCategory(value)}></AddCategory>
        <ol>
            {
             categories.map((category)=>{
                return (
                    <GifGrid key={category} category={category}></GifGrid>
                )
             })
            }
        </ol>
        </>
    );
}