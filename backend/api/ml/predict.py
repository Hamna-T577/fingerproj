

import cv2
import numpy as np
from tensorflow.keras.models import load_model

# Load trained CNN model (trained earlier using dataset)
model = load_model("api/ml/blood_group_model.h5")

# Blood group labels (same order as training)
CLASS_NAMES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

def preprocess_image(image_path):
    """
    Preprocessing steps taken directly from training (PDF):
    - Convert to grayscale
    - Resize to 128x128
    - Normalize pixel values
    """
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    img = cv2.resize(img, (128, 128))
    img = img / 255.0
    img = img.reshape(1, 128, 128, 1)
    return img

def predict_blood_group(image_path):
    """
    Predict blood group from fingerprint image
    """
    img = preprocess_image(image_path)
    prediction = model.predict(img)
    label = np.argmax(prediction)
    return CLASS_NAMES[label]
