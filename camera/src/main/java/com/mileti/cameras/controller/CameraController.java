package com.mileti.cameras.controller;


import com.mileti.cameras.model.Camera;
import com.mileti.cameras.service.CameraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
@CrossOrigin(value = "http://localhost:1111")
public class CameraController {

    @Autowired
    private CameraService cameraService;

    @PostMapping("/addCamera")
    public ResponseEntity<Camera> saveCamera(@RequestBody Camera newCamera){
        Camera camera = cameraService.saveNewCamera(newCamera);
        return ResponseEntity.ok(camera);
    }

    @GetMapping("/getCamera")
    public ResponseEntity<List<Camera>> getCameras(){
        return cameraService.getCamera();
    }

    @GetMapping("/getCameraById")
    public ResponseEntity<Camera> getCameraById(@RequestParam("cameraId") String id){
        return cameraService.findCameraById(id);
    }

    @DeleteMapping("/deleteCameraById")
    public ResponseEntity<String> deleteCamera(@RequestParam("cameraId") String id){
        return cameraService.deleteCameraById(id);
    }

    @DeleteMapping("/deleteCameras")
    public ResponseEntity<Void> deleteSelected(@RequestParam List<String> ids){
        return cameraService.deleteSelectedCameras(ids);
    }

    @PutMapping("/updateCameras")
    public ResponseEntity<Camera> updateCamera(@RequestBody Camera camera, @RequestParam("cameraId") String id){
        return cameraService.updateCamera(camera, id);
    }


}
