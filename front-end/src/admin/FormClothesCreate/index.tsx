import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react"
import PagesInformer from "../../components/pages-informer";

interface FormData {
  name: string;
  collection: string;
  category: string;
  gender: string;
  color: string;
  size: string;
  url: string;
  price: string;
}

export const FormClothesCreate = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    collection: '',
    category: '',
    gender: '',
    color: '',
    size: '',
    url: '',
    price: '',
  })
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(formData);
      await axios.post('http://localhost:5172/api/Clothes', formData)
    } catch (error) {
      console.error('Error submitting data', error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormdata) => ({
      ...prevFormdata,
      [name]: value
    }))

  }

  return (
    <>
      <PagesInformer />
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input type="text" name="collection" value={formData.collection} onChange={handleChange} placeholder="Collection" />
        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" />
        <input type="text" name="color" value={formData.color} onChange={handleChange} placeholder="Color" />
        <input type="text" name="size" value={formData.size} onChange={handleChange} placeholder="Size" />
        <input type="text" name="url" value={formData.url} onChange={handleChange} placeholder="URL" />
        <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
