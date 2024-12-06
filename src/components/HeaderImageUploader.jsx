const HeaderImageUploader = ({ onImageUpload }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-bold">Header Image</label>
      <input type="file" onChange={handleImageChange} />
    </div>
  );
};

export default HeaderImageUploader;
