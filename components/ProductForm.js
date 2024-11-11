import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { ReactSortable } from "react-sortablejs";
import AddCustomProperties from "./AddCustomProperties";
import PropertyManager from "./PropertyManager";
export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
  category: assignedCategory,
  properties: assignedProperties,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [category, setCategory] = useState(assignedCategory || "");
  const [productProperties, setProductProperties] = useState(
    assignedProperties || {}
  );
  const [price, setPrice] = useState(existingPrice || "");
  const [images, setImages] = useState(existingImages || []);
  const [goToProducts, setGoToProducts] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [allProperties, setAllProperties] = useState(assignedProperties || false);
  const propertiesToFill = [];

  const router = useRouter();
  useEffect(() => {
    axios.get("/api/categories").then((result) => {
      console.log("result", result);

      setCategories(result.data);
    });
  }, []);

  function getPropertyFromChild(pro) {
    setAllProperties(pro)
  }

  // useEffect(() => { console.log('----------------------------------', properties) }, [properties])

  async function saveProduct(ev) {
    ev.preventDefault();
    const data = {
      title,
      description,
      price,
      images,
      category,
      properties: allProperties,
    };
    if (_id) {
      //update
      await axios.put("/api/products", { ...data, _id });
    } else {
      //create
      await axios.post("/api/products", data);
    }
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push("/products");
  }
  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      console.log("res - - - ", res.data.links);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  }
  function updateImagesOrder(images) {
    setImages(images);
  }
  function setProductProp(propName, value) {
    setProductProperties((prev) => {
      const newProductProps = { ...prev };
      newProductProps[propName] = value;
      return newProductProps;
    });
  }

  // useEffect(() => {
  //   if (categories.length > 0 && category) {
  //     let catInfo = categories.find(({ _id }) => _id === category);
  //     propertiesToFill.push(...catInfo?.properties);
  //     while (catInfo?.parent?._id) {
  //       const parentCat = categories.find(
  //         ({ _id }) => _id === catInfo?.parent?._id
  //       );
  //       propertiesToFill.push(...parentCat.properties);
  //       catInfo = parentCat;
  //     }
  //   }

  // }, [])


  // function addProperty() {
  //   setProperties({ size: true, border: true })
  // }
  // function handlePropertyValuesChange(property, key) {
  //   if (key === 'border') {
  //     setProperties({ ...properties, border: !property });
  //     // setPropertiesBorder(!property)
  //   } else {
  //     setProperties({ ...properties, size: !property });
  //     // setPropertiesSize()
  //   }
  //   console.log('properties', properties)
  // }
  // function removeProperty() {
  //   setProperties();
  // }
  return (
    <form onSubmit={saveProduct}>
      <label>Product name</label>
      <input
        type="text"
        placeholder="product name"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <label>Category</label>
      <select value={category} onChange={(ev) => setCategory(ev.target.value)}>
        <option value="">Uncategorized</option>
        {categories.length > 0 &&
          categories.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
      </select>
      {propertiesToFill.length > 0 &&
        propertiesToFill.map((p) => (
          <div key={p.name} className="">
            <label>{p.name[0].toUpperCase() + p.name.substring(1)}</label>
            <div>
              <select
                value={productProperties[p.name]}
                onChange={(ev) => setProductProp(p.name, ev.target.value)}
              >
                {p.values.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      <label>Photos</label>
      <div className="mb-2 flex flex-wrap gap-1">
        <ReactSortable
          list={images}
          className="flex flex-wrap gap-1"
          setList={updateImagesOrder}
        >
          {!!images?.length &&
            images.map((link) => (
              <div
                key={link}
                className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200"
              >
                <img src={link} alt="" className="rounded-lg" />
              </div>
            ))}
        </ReactSortable>
        {isUploading && (
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
          <input type="file" onChange={uploadImages} className="hidden" />
        </label>
      </div>
      <label>Description</label>
      <textarea
        placeholder="description"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      />
      <label>Price (in USD)</label>
      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(ev) => setPrice(ev.target.value)}
      />

      {/* <div>
        <label>Properties</label>
        <div className="">
          <input
            checked
            id="green-checkbox"
            type="checkbox"
            value=""
            className=""
          />
          <label
            for="green-checkbox"
            className=" "
          >
            Green
          </label>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="block  ">Properties</h3>
         <button
          onClick={addProperty}
          type="button"
          className="btn-default text-sm mb-2">
          Add new property
        </button>
        {properties &&
          <div className="properties_checks_container" >
            <div className="properties_check" >
              <input
                type="checkbox"
                // className="mb-0"
                onChange={ev =>
                  handlePropertyValuesChange(properties.size, 'size')
                }
                checked={properties.size}
              />
              Add Size
            </div>
            <div className="properties_check" >
              <input
                type="checkbox"
                // className="mb-0"
                onChange={ev =>
                  handlePropertyValuesChange(properties.border, 'border')
                }
                checked={properties.border}
              />
              Add Borders
            </div>
            <button
              onClick={() => removeProperty()}
              type="button"
              className="btn-red">
              Remove
            </button>
          </div>


        }
      </div> */}
      {/* <AddCustomProperties /> */}
      <PropertyManager allProperties={allProperties} setAllProperties={getPropertyFromChild} />
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
