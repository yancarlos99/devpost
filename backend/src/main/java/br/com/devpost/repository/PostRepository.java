package br.com.devpost.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devpost.model.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
	
	Page<Post> findAll(Pageable var1);

}
