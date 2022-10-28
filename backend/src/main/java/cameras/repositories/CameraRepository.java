package cameras.repositories;


import cameras.model.Camera;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CameraRepository extends CrudRepository<Camera, String>{

    List<Camera> findAll();

    Camera findCameraById(String id);
}
