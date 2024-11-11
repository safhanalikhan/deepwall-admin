// PropertyManager.jsx
import React, { useState, useEffect } from 'react';

const PropertyManager = ({ allProperties, setAllProperties }) => {
  const [properties, setProperties] = useState(allProperties);

  const addProperty = () => {
    if (properties) {
      console.log("🚀 ~ addProperty ~ properties: if", properties)
      setProperties([
        ...properties,
        { name: '', data: [{ property: '', value: '' }] }
      ]);
    } else {
      console.log("🚀 ~ addProperty ~ properties: else", properties)
      setProperties([
        { name: '', data: [{ property: '', value: '' }] }
      ]);
    }
  };

  useEffect(() => {
    setAllProperties(properties)
  }, [properties])

  const addSubProperty = (propertyIndex) => {
    const updatedProperties = [...properties];
    updatedProperties[propertyIndex].data.push({ property: '', value: '' });
    setProperties(updatedProperties);
  };

  const handlePropertyChange = (propertyIndex, fieldName, value) => {
    const updatedProperties = [...properties];
    updatedProperties[propertyIndex][fieldName] = value;
    setProperties(updatedProperties);
  };

  const handleSubPropertyChange = (propertyIndex, subPropertyIndex, fieldName, value) => {
    const updatedProperties = [...properties];
    updatedProperties[propertyIndex].data[subPropertyIndex][fieldName] = value;
    setProperties(updatedProperties);
  };

  const removeProperty = (propertyIndex) => {
    const updatedProperties = properties.filter((_, index) => index !== propertyIndex);
    setProperties(updatedProperties);
  };

  const removeSubProperty = (propertyIndex, subPropertyIndex) => {
    const updatedProperties = [...properties];
    updatedProperties[propertyIndex].data = updatedProperties[propertyIndex].data.filter(
      (_, index) => index !== subPropertyIndex
    );
    setProperties(updatedProperties);
  };


  // const saveProperties = () => {
  //   console.log('Saved Properties:', properties);
  //   setAllProperties(properties)
  // };

  return (
    <div className="Custom-properties" >
      <div className="add-property-con">
        <h1 className="mb-0" >Add Properties <span>(optional)</span> </h1>
        <div
          className="btn-primary add-property-btn  px-4 px-2 "
          onClick={() => {
            console.log('on click')
            addProperty()
          }}
        >
          Add Property
        </div>
      </div>
      {properties && properties?.length > 0 ?
        <div>
          {
            properties?.map((property, propertyIndex) => (
              <div key={propertyIndex} style={{ marginBottom: '30px', padding: '10px', border: '1px solid #ccc' }}>
                <input
                  type="text"
                  placeholder="Enter property name"
                  className="mb-0"
                  value={property?.name}
                  onChange={(e) => handlePropertyChange(propertyIndex, 'name', e.target.value)}
                />
                {property?.data?.map((subProperty, subPropertyIndex) => (
                  <div key={subPropertyIndex} style={{ display: 'flex', marginTop: '10px' }}>
                    <input
                      type="text"
                      placeholder="Sub-property name"
                      value={subProperty?.property}
                      className="mb-0"
                      onChange={(e) => handleSubPropertyChange(propertyIndex, subPropertyIndex, 'property', e.target.value)}
                      style={{ marginRight: '10px' }}
                    />
                    <input
                      type="text"
                      placeholder="Sub-property value"
                      className="mb-0"
                      value={subProperty?.value}
                      onChange={(e) => handleSubPropertyChange(propertyIndex, subPropertyIndex, 'value', e.target.value)}
                    />
                    <div
                      onClick={() => removeSubProperty(propertyIndex, subPropertyIndex)}
                      className="btn-red"
                    >
                      Remove
                    </div>
                  </div>
                ))}

                <div className="d-flex justify-content-end my-3 align-items-center " >
                  <div
                    style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'white', cursor: 'pointer' }}
                    className="btn-primary me-3 "
                    onClick={() => addSubProperty(propertyIndex)}>
                    Add Sub-Property
                  </div>
                  <div
                    onClick={() => removeProperty(propertyIndex)}
                    className="btn-primary add-property-btn align-self-end px-4 px-2 "
                  >
                    Remove
                  </div>
                </div>
              </div>
            ))
          }
          {/* <div onClick={() => saveProperties}
            className="btn-primary add-property-btn align-self-end px-4 px-2 "
            style={{ marginTop: '20px', backgroundColor: 'rgba(0, 128, 0, 0.5)', color: 'white', padding: '10px' }}>
            Save
          </div> */}
        </div>
        :
        false
      }



    </div>
  );
};

export default PropertyManager;
