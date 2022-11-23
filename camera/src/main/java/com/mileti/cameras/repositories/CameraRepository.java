package com.mileti.cameras.repositories;

import com.mileti.cameras.model.Camera;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface CameraRepository extends MongoRepository<Camera, String> {
    Camera findCameraById(String id);
}
