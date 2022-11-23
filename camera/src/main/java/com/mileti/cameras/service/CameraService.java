package com.mileti.cameras.service;


import com.mileti.cameras.model.Camera;
import com.mileti.cameras.repositories.CameraRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@AllArgsConstructor
public class CameraService {

    @Autowired
    private CameraRepository cameraRepository;

    public Camera saveNewCamera(Camera newCamera) {
        Camera response = cameraRepository.save(newCamera);
        return response;
    }

    public ResponseEntity<List<Camera>> getCamera() {
        List<Camera> cameras =  cameraRepository.findAll();
        if (cameras != null){
            return ResponseEntity.ok(cameras);
        }
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    public ResponseEntity<String> deleteCameraById(String id) {
        Camera camera =  cameraRepository.findCameraById(id);
        if (camera != null){
            cameraRepository.deleteById(id);
            return ResponseEntity.ok("Camera was successfully deleted");
        }
        else {
            return  ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        }
    }

    public ResponseEntity<Void> deleteSelectedCameras(List<String> ids) {
        cameraRepository.deleteAllById(ids);
        return ResponseEntity.noContent().build();
    }
    public ResponseEntity<Camera> findCameraById(String id) {
        Camera camera = cameraRepository.findCameraById(id);
        if(camera != null){
            return ResponseEntity.ok(camera);
        }
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

        public ResponseEntity<Camera> updateCamera(Camera newCamera, String id){
            Camera camera = cameraRepository.findCameraById(id);
        if (camera != null){
            newCamera.setId(id);
        cameraRepository.save(newCamera);
        return ResponseEntity.ok(newCamera);
        }
        else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        }

    }


