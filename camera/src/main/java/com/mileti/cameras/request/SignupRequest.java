package com.mileti.cameras.request;

import lombok.Data;

import java.util.Set;

import javax.validation.constraints.*;

@Data

public class SignupRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;


}
