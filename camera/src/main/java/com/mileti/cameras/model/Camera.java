package com.mileti.cameras.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "camera")
public class Camera {
    @Id
    private String id;
    private String name;
    private String model;
    private String resolution;
    private String ip;
    private BigDecimal lat;
    private BigDecimal lon;

}
