"use client";

import { useSelector } from "react-redux";
import { useState, useRef, useCallback } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaLink,
  FaEye,
  FaPen,
  FaCamera,
  FaSquare,
  FaTrash,
  FaUndo,
} from "react-icons/fa";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function ProfileCrop({}) {
  const user = useSelector((state) => state.auth.user);
  const { details, loading: profileLoading } = useSelector(
    (state) => state.profile.data
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [isCropping, setIsCropping] = useState(false);
  const [rotation, setRotation] = useState(0);

  const defaultAvatar =
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";

  const [finalAvatar, setFinalAvatar] = useState(
    user?.avatar ||
      "https://media.licdn.com/dms/image/v2/D4D03AQHMd72FIRqMdQ/profile-displayphoto-shrink_200_200/0/1723157343073"
  );

  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef(null);

  const onSelectFile = (e) => {
    if (e.target.files?.length > 0) {
      const file = e.target.files[0];
      setImageSrc(URL.createObjectURL(file));
      setIsCropping(true);
      setRotation(0);
    }
  };

  const onImageLoad = useCallback((img) => {
    imgRef.current = img;
    const { width, height } = img;
    const newCrop = centerCrop(
      makeAspectCrop({ unit: "%", width: 50 }, 1, width, height),
      width,
      height
    );
    setCrop(newCrop);
  }, []);

  const getCroppedImg = () => {
    if (!completedCrop || !imgRef.current) return;

    const canvas = document.createElement("canvas");
    const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
    const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
    const pixelRatio = window.devicePixelRatio;

    canvas.width = completedCrop.width * pixelRatio;
    canvas.height = completedCrop.height * pixelRatio;
    const ctx = canvas.getContext("2d");

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    ctx.drawImage(
      imgRef.current,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      completedCrop.width,
      completedCrop.height
    );

    return canvas.toDataURL("image/jpeg");
  };

  const handleSave = () => {
    const croppedImage = getCroppedImg();
    if (croppedImage) {
      setFinalAvatar(croppedImage);
      setIsCropping(false);
      setRotation(0);
    }
  };

  const handleDelete = () => {
    setFinalAvatar(defaultAvatar);
    setIsCropping(false);
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleReset = () => {
    setRotation(0);
    setCrop(undefined);
    setImageSrc(null);
    setIsCropping(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full min-w-full">
      <div className="max-w-7xl mx-auto">
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0"
          style={{ width: "calc(100% - 14rem)" }}
        >
          <div className="relative w-full h-48">
            <img
              src={
                user?.cover ||
                "https://media.licdn.com/dms/image/v2/D4D16AQFlbqYk8lTvNA/profile-displaybackgroundimage-shrink_350_1400/B4DZT_KTDNHIAs-/0/1739447678107?e=1756339200&v=beta&t=h109QTT_Ii7RF8WTxcgr0LSss6wLzzzetQSTAJCw8jE"
              }
              alt="Kapak"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative flex -mt-24 px-6">
            <img
              src={
                user?.finalAvatar ||
                "https://media.licdn.com/dms/image/v2/D4D03AQHMd72FIRqMdQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723157343073?e=1756339200&v=beta&t=IHWsh9_DfLtWiYTe-GablLa_5hzPHh6w-8eaxIKO_Tc"
              }
              alt="Profil"
              className="w-42 h-42 rounded-full border-4 border-white shadow-md object-cover cursor-pointer hover:opacity-80"
              onClick={() => setIsAvatarModalOpen(true)}
            />
          </div>

          <div className="text-start mt-2 px-6 pb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              {user?.name || "Eren Sefa Öztürk"}
            </h1>
            <p className="text-gray-600 text-md">
              {user?.university || "Maltepe Üniversitesi Mezunu"}
            </p>
            <p className="text-gray-400 text-sm">
              {user?.location || "Maltepe, İstanbul, Türkiye"}{" "}
              <span
                className="text-blue-700 cursor-pointer hover:underline"
                onClick={() => setIsModalOpen(true)}
              >
                İletişim Bilgileri
              </span>
            </p>
            <p className="text-blue-500 text-sm font-bold mt-1 cursor-pointer hover:underline">
              500+ bağlantı
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-bold">
                Açık
              </button>
              <button className="px-2 py-2 border border-blue-600 rounded-full text-blue-600 hover:bg-gray-100 transition">
                Profil Bölümü Ekle
              </button>
              <button className="px-2 py-2 border border-blue-600 rounded-full text-blue-600 hover:bg-gray-100 transition">
                Profili Geliştir
              </button>
              <button className="px-2 py-2 border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100 transition">
                Kaynaklar
              </button>
            </div>
          </div>
        </div>
      </div>

      {isAvatarModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setIsAvatarModalOpen(false)}
        >
          <div
            className="relative bg-transparent p-4 w-full max-w-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setIsAvatarModalOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-white text-lg mb-4 w-full text-start">
              Profil Fotoğrafı
            </h2>

            {isAvatarModalOpen && (
              <div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
                onClick={() => setIsAvatarModalOpen(false)}
              >
                <div
                  className="relative bg-white rounded-lg shadow-2xl p-6 w-full max-w-2xl flex flex-col items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl"
                    onClick={() => setIsAvatarModalOpen(false)}
                  >
                    ✕
                  </button>

                  <h2 className="text-lg font-bold text-gray-800 mb-4 w-full text-start">
                    Profil Fotoğrafı
                  </h2>

                  {!isCropping ? (
                    <img
                      src={finalAvatar}
                      alt="Profil"
                      className="rounded-full w-64 h-64 object-cover border-4 border-gray-200 shadow-md"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    />
                  ) : (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      {imageSrc && (
                        <ReactCrop
                          crop={crop}
                          onChange={(c) => setCrop(c)}
                          onComplete={(c) => setCompletedCrop(c)}
                          aspect={1}
                        >
                          <img
                            ref={imgRef}
                            src={imageSrc}
                            onLoad={(e) => onImageLoad(e.currentTarget)}
                            className="max-h-96"
                            style={{ transform: `rotate(${rotation}deg)` }}
                          />
                        </ReactCrop>
                      )}
                      <div className="flex justify-between mt-4 gap-3">
                        <button
                          type="button"
                          onClick={handleRotate}
                          className="px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 flex gap-1"
                        >
                          <FaUndo /> Döndür
                        </button>
                        <button
                          type="button"
                          onClick={handleSave}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                          Kaydet
                        </button>
                        <button
                          type="button"
                          onClick={handleReset}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                          İptal
                        </button>
                      </div>
                    </div>
                  )}

                  {!isCropping && (
                    <div className="flex justify-between items-center text-gray-800 w-full max-w-2xl mt-6">
                      <div className="flex items-center gap-2 border px-3 py-1 rounded-full">
                        <FaEye /> <span>Herkes</span>
                      </div>
                      <div className="flex gap-6 text-lg">
                        <button onClick={() => setIsCropping(true)}>
                          <FaPen />
                          <p className="text-xs">Düzenle</p>
                        </button>
                        <label className="cursor-pointer">
                          <FaCamera />
                          <p className="text-xs">Fotoğraf Ekle</p>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={onSelectFile}
                            className="hidden"
                          />
                        </label>
                        <button onClick={handleRotate}>
                          <FaSquare />
                          <p className="text-xs">Döndür</p>
                        </button>
                        <button onClick={handleDelete}>
                          <FaTrash />
                          <p className="text-xs">Sil</p>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {!isCropping && (
              <div className="flex justify-between items-center text-white w-full max-w-2xl mt-6">
                <div className="flex items-center gap-2 border px-3 py-1 rounded-full">
                  <FaEye /> <span>Herkes</span>
                </div>
                <div className="flex gap-6 text-lg">
                  <button onClick={() => setIsCropping(true)}>
                    <FaPen />
                    <p className="text-xs">Düzenle</p>
                  </button>
                  <label className="cursor-pointer">
                    <FaCamera />
                    <p className="text-xs">Fotoğraf Ekle</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={onSelectFile}
                      className="hidden"
                    />
                  </label>
                  <button onClick={handleRotate}>
                    <FaSquare />
                    <p className="text-xs">Döndür</p>
                  </button>
                  <button onClick={handleDelete}>
                    <FaTrash />
                    <p className="text-xs">Sil</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
