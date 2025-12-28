from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
from .ml.predict import predict_blood_group

@csrf_exempt
def predict(request):
    if request.method == "POST":
        image = request.FILES.get("image")

        if not image:
            return JsonResponse({"error": "No image uploaded"}, status=400)

        # Save uploaded image temporarily
        upload_dir = "media"
        os.makedirs(upload_dir, exist_ok=True)

        image_path = os.path.join(upload_dir, image.name)
        with open(image_path, "wb+") as f:
            for chunk in image.chunks():
                f.write(chunk)

        # Predict
        blood_group = predict_blood_group(image_path)

        return JsonResponse({"blood_group": blood_group})

    return JsonResponse({"error": "Invalid request"}, status=405)
