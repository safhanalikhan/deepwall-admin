import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { withSwal } from 'react-sweetalert2';
import Spinner from "@/components/Spinner";

function Categories({ swal }) {
  const [editedCategory, setEditedCategory] = useState(null);
  const [name, setName] = useState('');
  const [parentCategory, setParentCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [properties, setProperties] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState(false);
  const [bgImages, setBgImages] = useState("");

  useEffect(() => {
    fetchCategories();
  }, [])
  useEffect(() => {
    console.log("🚀 ~ useEffect ~ images:", images)
  }, [images])
  useEffect(() => {
    console.log("🚀 ~ useEffect ~ bgImages:", bgImages)
  }, [bgImages])
  function fetchCategories() {
    axios.get('/api/categories').then(result => {
      const allCategories = result.data.reduce((acc, category) => {
        if (!category?.parent) {
          acc.push(category);
        }
        return acc;
      }, []);
      setCategories(allCategories);
    });
  }
  function updateImagesOrder(images, imgType) {
    if (imgType === 'bg') {
      setBgImages(images);
    } else {
      setImages(images);
    }
  }
  async function uploadImages(ev, uploadType) {
    try {
      const files = ev.target?.files;
      console.log("🚀 ~ uploadImages ~ files:", files)
      if (files?.length > 0) {
        setIsUploading(uploadType)
        const data = new FormData();
        for (const file of files) {
          console.log("🚀 ~ uploadImages ~ file:", file)
          data.append("file", file);
        }
        console.log("🚀 ~ uploadImages ~ data:", data)
        const res = await axios.post("/api/upload", data);
        console.log("res - - - ", res.data.links);
        if (uploadType === "bg") {
          setBgImages(res.data.links?.[0]);
        } else {
          setImages(res.data.links?.[0]);
        }
      }
    } catch (err) {
      console.error('error in uploading category image :::', err.message)
    } finally {
      setIsUploading(false)
    }
  }
  async function saveCategory(ev) {
    try {
      setUploading(true)
      ev.preventDefault();
      const data = {
        name,
        parentCategory,
        properties: properties.map(p => ({
          name: p.name,
          values: p.values.split(','),
        })),
        featuredImg: images,
        coverImg: bgImages
      };
      console.log("🚀 ~ saveCategory ~ data:", data)
      if (editedCategory) {
        data._id = editedCategory._id;
        await axios.put('/api/categories', data);
        setEditedCategory(null);
      } else {
        await axios.post('/api/categories', data);
      }
      setName('');
      setParentCategory('');
      setImages(false);
      setBgImages(false);
      setProperties([]);
      fetchCategories();
    } catch (err) {
      console.error('error in saving category :::', err.message)
    } finally {
      setUploading(false)
    }
  }
  function editCategory(category) {
    setEditedCategory(category);
    setName(category.name);
    setParentCategory(category.parent?._id);
    setProperties(
      category.properties.map(({ name, values }) => ({
        name,
        values: values.join(',')
      }))
    );
  }
  function deleteCategory(category) {
    swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete ${category.name}?`,
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Yes, Delete!',
      confirmButtonColor: '#d55',
      reverseButtons: true,
    }).then(async result => {
      if (result.isConfirmed) {
        const { _id } = category;
        await axios.delete('/api/categories?_id=' + _id);
        fetchCategories();
      }
    });
  }
  function addProperty() {
    setProperties(prev => {
      return [...prev, { name: '', values: '' }];
    });
  }
  function handlePropertyNameChange(index, property, newName) {
    setProperties(prev => {
      const properties = [...prev];
      properties[index].name = newName;
      return properties;
    });
  }
  function handlePropertyValuesChange(index, property, newValues) {
    setProperties(prev => {
      const properties = [...prev];
      properties[index].values = newValues;
      return properties;
    });
  }
  function removeProperty(indexToRemove) {
    setProperties(prev => {
      return [...prev].filter((p, pIndex) => {
        return pIndex !== indexToRemove;
      });
    });
  }
  return (
    <Layout>
      <h1>Categories</h1>
      <label>
        {editedCategory
          ? `Edit category ${editedCategory.name}`
          : 'Create new category'}
      </label>
      <form onSubmit={saveCategory}>
        <div className="flex gap-1">
          <input
            type="text"
            placeholder={'Category name'}
            onChange={ev => setName(ev.target.value)}
            value={name} />
          <select
            onChange={ev => setParentCategory(ev.target.value)}
            value={parentCategory}>
            <option value="">No parent category</option>
            {categories.length > 0 && categories.map(category => (
              <option key={category._id} value={category._id}>{category.name}</option>
            ))}
          </select>
        </div>

        <p className="mb-2 mt-4">Upload featured Image</p>
        <label className="mb-2 ">Upload featured Image (square and rectanglular size recommended)</label>
        <div className="mb-4 flex flex-wrap gap-1">
          {images &&
            <div
              key={images}
              className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200"
            >
              <img src={images} alt="" className="rounded-lg" />
            </div>
          }
          {isUploading && isUploading != "bg" && (
            <div className="h-24 flex items-center">
              <Spinner />
            </div>
          )}
          <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <div>Add image</div>
            <input type="file" onChange={(ev) => uploadImages(ev, "featured")} className="hidden" />
          </label>

        </div>
        <hr />

        <p className="mb-2 mt-4 ">Upload Cover Image</p>
        <label className="mb-2 ">(landscape size recommended)</label>
        <div className="mb-2 mb-4 flex flex-wrap gap-1">
          {bgImages &&
            <div
              key={bgImages}
              className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200"
            >
              <img src={bgImages} alt="" className="rounded-lg" />
            </div>
          }
          {isUploading && isUploading == "bg" && (
            <div className="h-24 flex items-center">
              <Spinner />
            </div>
          )}
          <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <div>Add image</div>
            <input type="file" onChange={(ev) => uploadImages(ev, "bg")} className="hidden" />
          </label>
        </div>
        <hr />
        <div className="mb-2 mt-4">
          <label className="block">Properties</label>
          <button
            onClick={addProperty}
            type="button"
            className="btn-default text-sm mb-2">
            Add new property
          </button>
          {properties.length > 0 && properties.map((property, index) => (
            <div key={property.name} className="flex gap-1 mb-2">
              <input type="text"
                value={property.name}
                className="mb-0"
                onChange={ev => handlePropertyNameChange(index, property, ev.target.value)}
                placeholder="property name (example: color)" />
              <input type="text"
                className="mb-0"
                onChange={ev =>
                  handlePropertyValuesChange(
                    index,
                    property, ev.target.value
                  )}
                value={property.values}
                placeholder="values, comma separated" />
              <button
                onClick={() => removeProperty(index)}
                type="button"
                className="btn-red">
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-1">
          {editedCategory && (
            <button
              type="button"
              onClick={() => {
                setEditedCategory(null);
                setName('');
                setParentCategory('');
                setProperties([]);
              }}
              className="btn-default">Cancel</button>
          )}
          <button type="submit"
            className="btn-primary py-1">
            {
              uploading ?
                "uploading..."
                :
                "Save"
            }
          </button>
        </div>
      </form>
      {!editedCategory && (
        <table className="basic mt-4">
          <thead>
            <tr>
              <td>Category name</td>
              {/* <td>Parent category</td> */}
              {/* <td></td> */}
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 && categories.map(category => (
              <tr key={category._id}>
                <td style={{ display: "flex", gap: "5px" }} >
                  <div style={{ flex: 1 }}>{category.name}</div>
                  <button
                    onClick={() => editCategory(category)}
                    className="btn-default mr-1"
                  >
                    <i className="bi bi-pen"></i>
                  </button>
                  <button
                    onClick={() => deleteCategory(category)}
                    className="btn-red">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
                {/* <td>{category?.parent?.name}</td> */}
                {/* <td>
                  
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Layout>
  );
}

export default withSwal(({ swal }, ref) => (
  <Categories swal={swal} />
));
